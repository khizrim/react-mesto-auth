function useOverlayCloser(props) {
  const { onClose } = props;

  function handleOverlayClose(e) {
    if (e.target.classList.contains('popup_opened')) {
      onClose();
    }
  };

  return handleOverlayClose;
}

export default useOverlayCloser;
