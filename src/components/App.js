import { useState, useEffect } from 'react';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import ConfirmationPopup from './ConfirmationPopup';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isImageViewerPopupOpen, setImageViewerPopupState] = useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupState] = useState(false);
  const [noScroll, setNoScroll] = useState(false);
  const [buttonState, setButtonState] = useState('');

  useEffect(() => {
    if (
      isEditAvatarPopupOpen ||
      isEditProfilePopupOpen ||
      isAddPlacePopupOpen ||
      isImageViewerPopupOpen ||
      isConfirmationPopupOpen
    ) {
      setNoScroll(true);
    } else {
      setNoScroll(false)
    }
  }, [
    noScroll,
    isEditAvatarPopupOpen,
    isEditProfilePopupOpen,
    isAddPlacePopupOpen,
    isImageViewerPopupOpen,
    isConfirmationPopupOpen,
  ]);

  useEffect(() => {
    (async () => {
      try {
        const userData = await api.getUserData();
        setCurrentUser(userData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const initialCards = await api.getInitialCards();
        setCards(initialCards);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupState(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupState(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupState(true);
  }

  function handleDeleteClick(e) {
    setConfirmationPopupState(true);
    setSelectedCard(e);
  }

  function handleCardClick(e) {
    setImageViewerPopupState(true);
    setSelectedCard(e);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    (async () => {
      try {
        const likedCard = await api.changeCardLikeStatus(card._id, isLiked);
        const newCards = cards.map((c) => (c._id === card._id ? likedCard : c));
        setCards(newCards);
      } catch (err) {
        console.log(err);
      }
    })();
  }

  function handleCardDelete(card) {
    (async () => {
      try {
        handleLoading(true, 'Удаление...');
        await api.removeCard(card._id);
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
        closeAllPopups();
      } catch (err) {
        console.log(err);
      } finally {
        handleLoading(false);
      }
    })();
  }

  function handleUpdateAvatar(data, reset) {
    (async () => {
      try {
        handleLoading(true, 'Обновление...');
        const userData = await api.editUserPic(data);
        setCurrentUser(userData);
        closeAllPopups();
        reset();
      } catch (err) {
        console.log(err);
      } finally {
        handleLoading(false);
      }
    })();
  }

  function handleUpdateUser(data) {
    (async () => {
      try {
        handleLoading(true, 'Сохранение...');
        const userData = await api.editUserData(data);
        setCurrentUser(userData);
        closeAllPopups();
      } catch (err) {
        console.log(err);
      } finally {
        handleLoading(false);
      }
    })();
  }

  function handleAddPlace(data, reset) {
    (async () => {
      try {
        handleLoading(true, 'Создание...');
        const newCard = await api.addCard(data);
        setCards([newCard, ...cards]);
        closeAllPopups();
        reset();
      } catch (err) {
        console.log(err);
      } finally {
        handleLoading(false);
      }
    })();
  }

  function handleLoading(isLoading, text) {
    if (isLoading) {
      setButtonState(text);
    } else {
      setButtonState('');
    }
  }

  function closeAllPopups() {
    setEditAvatarPopupState(false);
    setEditProfilePopupState(false);
    setAddPlacePopupState(false);
    setConfirmationPopupState(false);
    setImageViewerPopupState(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`page ${noScroll ? 'page_no-scroll' : ''}`}>
        <div className='page__container'>
          <Header
            userEmail={''}
            isLoggedIn={''}
            onSignOut={''}
          />
          <Main
            cards={cards}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleDeleteClick}
          ></Main>
          <Footer />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            submitBtn={buttonState}
            onUpdateAvatar={handleUpdateAvatar}
            onClose={closeAllPopups}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            submitBtn={buttonState}
            onUpdateUser={handleUpdateUser}
            onClose={closeAllPopups}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            submitBtn={buttonState}
            onAddPlace={handleAddPlace}
            onClose={closeAllPopups}
          />
          <ImagePopup
            isOpen={isImageViewerPopupOpen}
            name='image-vwr'
            card={selectedCard}
            onClose={closeAllPopups}
          />
          <ConfirmationPopup
            isOpen={isConfirmationPopupOpen}
            card={selectedCard}
            submitBtn={buttonState}
            onCardDelete={handleCardDelete}
            onClose={closeAllPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
