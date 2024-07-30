import './SIngleCard.scss';

export default function SingleCard({ card, card: { src }, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className='card'>
      <div>
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
