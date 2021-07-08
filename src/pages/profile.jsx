import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import ProfileSettings from '../components/profile-settings/profile-settings';

import AppForm from '../components/app-form/app-form';
import { logout } from '../services/user/actions';

import styles from './profile.module.css';

function ProfilePage() { 
    
    const dispatch = useDispatch();
    const {loginSuccess} = useSelector(store => store.user); 

    const {pathname} = useLocation();
        
    const profileMenuItems = React.useMemo( () => { 

        const exitHandler = (e) => {
            e.preventDefault();
            dispatch(logout());
        };

        return [
            {to: '/profile', label: 'Профиль', infoText: 'В этом разделе вы можете изменить свои персональные данные'},
            {to: '/profile/orders', label: 'История заказов', infoText: 'В этом разделе вы можете просмотреть свою историю заказов'},
            {to: '', onClickHandler: exitHandler, label: 'Выход'}
        ]
    }, 
    [dispatch]);
    
    const infoText = React.useMemo( () => {
        const currentMenuItem = profileMenuItems.find( item => item.to === pathname);
        return currentMenuItem ? currentMenuItem.infoText : '';
    }, 
    [pathname, profileMenuItems]);

    return (
        <>
        { loginSuccess && <AppForm additionalStyles={['profileForm']}>

                <section className={styles.profileNav}>
                    <ul>
                        {
                        profileMenuItems.map( (item, index) => (
                            <li key={index}>
                                <NavLink 
                                to={item.to} 
                                exact 
                                onClick={item.onClickHandler}
                                className={styles.profileNavItem} 
                                activeClassName="nav_link-active"> {item.label} </NavLink>
                                </li>
                        )) 
                        }
                    </ul>
                    <p className={styles.profileInfo}>{infoText}</p>
                </section>

                <section>
                    <Switch>
                        <Route path='/profile/orders'> orders </Route>
                        <Route path='/profile/orders/:id'> orders id </Route>
                        <Route path='/profile'> <ProfileSettings /> </Route>
                    </Switch>                    
                </section>

            </AppForm>
        }
        </>
    );
}

export default ProfilePage;