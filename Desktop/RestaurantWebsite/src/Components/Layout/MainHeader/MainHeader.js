import classes from './MainHeader.module.css'
import { Fragment } from 'react';
import mealsImage from  '../../../assets/meals.jpg';

const MainHeader = (props) =>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 >
                    SouthIndian Special Meals
                </h1>
                <button>
                    Cart
                </button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious Food!'/>
            </div>

        </Fragment>
    
        
    );
};

export default MainHeader;git branch -M main