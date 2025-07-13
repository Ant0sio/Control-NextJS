import './UserInfo.css'
import Image from "next/image";

//Це компонент в якому жорстко закодоване ім'я юзера і кружечок з фото.

const UserInfo = () => {
    return (
        <div className={'user'}>
            <Image
                className={'circle'} src="/images/user.png" width={50} height={50} alt="MAN"/>
            <p className={'name'}>Welcome,John</p>
        </div>
    );
};

export default UserInfo;