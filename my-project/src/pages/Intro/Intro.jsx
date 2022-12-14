import { useNavigate } from 'react-router-dom';
import './Intro.css';

function Intro() {
  const navigate = useNavigate();

  const onClickMoveMain = (e) => {
    navigate('/Main');
  };
  return (
    <>
      <main className='intro'>
        <div className='intro__intro-main'>
          <div className='intro-main__text'>
            <p>설문조사가 필요하신가요?</p>
            <p>오직 설문조사만을 위한 플랫폼</p>
            <p className='eungdap-title'>응답.</p>
            {/* <p>여러분의 시간을 아껴드립니다.</p> */}
          </div>
        </div>
        <ul className='intro__yet'>
          <li className='yet__img'>
            <img src='/images/samples/sample1.png' alt='에타 이미지' height={'500px'} width={'700px'} />
          </li>
          <li className='yet__text'>
            <p>설마,</p>
            <p>아직도 친구에게</p>
            <p>부탁하세요?</p>
          </li>
        </ul>
        <ul className='intro__f1'>
          <li className='f1__text'>
            <p>
              <span className='eungdap-title'>응답.</span>에서
            </p>
            <p>더 많은 사람들과</p>
            <p>직접 만든 설문지를</p>
            <p>공유해보세요.</p>
          </li>
          <li className='f1__img'>
            <img src='/images/samples/sample1.png' alt='설문지 테이블 이미지' height={'500px'} width={'700px'} />
          </li>
        </ul>
        <ul className='intro__f2'>
          <li className='f2__img'>
            <img src='/images/samples/sample1.png' alt='설문 결과 이미지' height={'500px'} width={'700px'} />
          </li>
          <li className='f2__text'>
            <p>
              <span className='eungdap-title'>응답.</span>에서
            </p>
            <p>여러분이 필요한</p>
            <p>설문 결과를 </p>
            <p>찾아 보세요.</p>
            <p></p>
          </li>
        </ul>
      </main>
      <div className='intro__start'>
        <p>설문조사 플랫폼</p>
        <p className='eungdap-title'>응답.</p>
        <button className='btn-basic' onClick={onClickMoveMain}>
          시작하기
        </button>
      </div>
    </>
  );
}

export default Intro;
