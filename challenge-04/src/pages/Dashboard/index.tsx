import { useEffect, useState } from 'react';
import api from '../../services/api';

import { Header } from '../../components/Header';
import { Food } from '../../components/Food';
import { ModalAddFood } from '../../components/ModalAddFood';
import { ModalEditFood } from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';
import { Food as FoodType } from '../../components/types';

export function Dashboard() {
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [editingFood, setEditingFood] = useState<FoodType>({} as FoodType);
  const [modalAddFoodIsOpen, setModalAddFoodIsOpen] = useState<boolean>(false);
  const [modalEditFoodIsOpen, setModalEditFoodIsOpen] = useState<boolean>(false);

  useEffect(() => {
    async function loadFoods() {
      const { data } = await api.get<FoodType[]>('/foods');
      setFoods(data);
    }
    loadFoods();
  }, []);

  const handleAddFood = async (food: any) => {
    try {
      const { data: foodAdded } = await api.post<FoodType>('/foods', {
        ...food,
        available: true,
      });

      setFoods([...foods, foodAdded]);
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdateFood = async (food: FoodType) => {
    try {
      const { data: foodUpdated } = await api.put<FoodType>(
        `/foods/${editingFood?.id}`,
        { ...editingFood, ...food },
      );

      const foodsUpdated = foods.map(f =>
        f.id !== foodUpdated.id ? f : foodUpdated,
      );

      setFoods(foodsUpdated);
    } catch (err) {
      console.log(err);
    }
  }

  const handleDeleteFood = async (id: number) => {
    await api.delete(`/foods/${id}`);
    const foodsFiltered = foods.filter(food => food.id !== id);

    setFoods(foodsFiltered);
  }

  const toggleModal = () => {
    setModalAddFoodIsOpen(!modalAddFoodIsOpen);
  }

  const toggleEditModal = () => {
    setModalEditFoodIsOpen(!modalEditFoodIsOpen);
  }

  const handleEditFood = (food: FoodType) => {
    setModalEditFoodIsOpen(!modalEditFoodIsOpen);
    setEditingFood(food);
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalAddFoodIsOpen}
        setIsOpen={setModalAddFoodIsOpen}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={modalEditFoodIsOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
}
