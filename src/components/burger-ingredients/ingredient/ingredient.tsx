/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDrag } from 'react-dnd';

import { Counter, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';

import { addIngredientToCart } from '../../../services/cart/actions';

import { useAppSelector, useAppDispatch, TIngredient } from '../../../services/types';

interface IIngredient {
  data: TIngredient;
  openModal: (data:TIngredient) => void;
}

function Ingredient({ data, openModal }: IIngredient) {
  const dispatch = useAppDispatch();
  const { bun, fillings } = useAppSelector((store) => store.cart);
  const [, dragRef] = useDrag({ type: 'ingredient', item: { id: data._id, type: data.type } });

  const ingredientCount = React.useMemo(() => {
    let count = [...fillings, bun]
      .filter((ingredient) => ingredient && data._id === ingredient._id)
      .length;
    if (data.type === 'bun' && count > 0) {
      count += 1;
    }
    return count;
  }, [fillings, bun, data._id, data.type]);

  const addIngredientViaButton = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(addIngredientToCart(data._id));
  };

  const openIngredientDetails = (e: React.MouseEvent) => {
    if ((e.target as Element).nodeName !== 'BUTTON') {
      openModal(data);
    }
  };

  const { image, name, price } = data;

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li className={styles.card} onClick={openIngredientDetails} ref={dragRef}>

      { ingredientCount > 0 && <Counter count={ingredientCount} size="default" /> }
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.price}>
        <span className={styles.price_num}>{price}</span>
        <CurrencyIcon type="secondary" />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.add_btn}>
        <Button type="secondary" size="medium" onClick={addIngredientViaButton}>Добавить</Button>
      </div>

    </li>
  );
}

export default Ingredient;
