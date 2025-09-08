import Input from '../UI/Input';
import styles from './MealItemForm.module.scss';

const MealItemForm = ({la}) => {
  return (
    <form className={styles.form}>
      <Input
        label='수량'
        x = {{
            type: 'text',
            onFocus: () => console.log("focus!")
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
