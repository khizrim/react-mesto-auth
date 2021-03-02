import useEscCloser from '../hooks/useEscCloser';
import useOverlayCloser from '../hooks/useOverlayCloser';

function InfoTooltip(props) {
  useEscCloser(props);
  const handleOverlayClose = useOverlayCloser(props)

  return (
    <div
      className={`popup popup_type_auth-status ${props.isOpen ? 'popup_opened' : '' }`}
      onClick={handleOverlayClose}
    >
      <div className="popup__container">
        <button
          type="reset"
          aria-label="Закрыть"
          className="popup__close-btn"
          onClick={props.onClose}
        />
        <img className="popup__auth-status-icon" src={props.status} alt='' />
        <h3 className="popup__title">{props.message}</h3>
      </div>
    </div>
  );
}

export default InfoTooltip;