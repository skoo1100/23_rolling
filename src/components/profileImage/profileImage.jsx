import { useRecoilValueLoadable } from "recoil";
import { profileImageData } from "../../store/recoil/apiData";
import { useEffect, useState } from "react";
import './profileImage.css';

const ProfileImage = ({profileImage, setProfileImage}) => {
    const {contents} = useRecoilValueLoadable(profileImageData);
    const [newImage, setNewImage] = useState([]);
    // 버튼 클래스 지정
    const [buttonClass, setButtonClass] = useState(false);

    const handleImageClick = (e, img) => {
        // 클릭된 프로필 변경 스크립트 & 클래스 변경 스크립트
        if(e.target.src === profileImage) {
            setProfileImage(contents.imageUrls.slice(0, 1)[0]);
            setButtonClass(null);
        } else {
            setProfileImage(e.target.src);
            setButtonClass(img);
        }
    }
    useEffect(() => {
        // 기본 프로필과 그 외 프로필 이미지를 나누는 스크립트
        if (contents?.imageUrls?.length > 0) {
            setNewImage(contents.imageUrls.slice(1));
            setProfileImage(contents.imageUrls.slice(0, 1)[0]);
        }
    }, [contents])
    return(
        <div className="profileImage">
            <strong className="formTitle">프로필 이미지</strong>
            <div className="profileImageBox">
                <div className="clickImageBox">
                    <img src={profileImage}/>
                </div>
                <div className="imageList">
                    <p>프로필 이미지를 선택해주세요!</p>
                    <ul>
                        {
                            newImage?.map((img, index) => {
                                return(
                                    <li key={index}>
                                        <button className={buttonClass === img ? 'on' : null} onClick={(e) => handleImageClick(e, img)} type="button">
                                            <img src={img} alt="프로필 이미지"/>
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileImage;