import './SingleCard.scss';

export default function SingleCard({
  card,
  card: { src },
  handleChoice,
  flipped,
  disabled
}) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={src} alt='card front' />
        <img
          className='back'
          src='/img/cover.png'
          alt='card back'
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
