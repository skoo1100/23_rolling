import ToggleButton from '../toggleButton/toggleButton';
import ButtonPrimary56 from '../button/buttonPrimary/buttonPrimary56/buttonPrimary56';
import './chooseBackground.css';

function ChooseBackground({
  userName,
  backgroundColor,
  backgroundImg,
  setBackgroundColor,
  setBackgroundImg,
}) {
  const userInfo = { userName, backgroundColor, backgroundImg };

  return (
    <div className="chooseBackground">
      <div className="chooseBackgroundText">
        <h1>배경화면을 선택해 주세요.</h1>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
      </div>
      <ToggleButton setBackgroundColor={setBackgroundColor} setBackgroundImg={setBackgroundImg} />
      <ButtonPrimary56 buttonName="생성하기" userInfo={userInfo} />
    </div>
  );
}

export default ChooseBackground;
