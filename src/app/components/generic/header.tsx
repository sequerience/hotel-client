
import Image from "next/image";
import Link from 'next/link';
import './style.css'

type HeaderProps = {
    userState: string;
};

export default function Header({ userState }: HeaderProps) {

    let isAuthenticated = false;
    if (userState === "client"){
        isAuthenticated = true;
    }

    return (
        <div className="w-[450px] top-container">
            <Link href="/dashboard" passHref>
                <Image src="/logo.svg" alt="Home" width={64} height={64} className="top-left-link" />
            </Link>
            <Link href="/dashboard" passHref>
                <h1 className="top-left-link-text">
                    Отель Александрия
                </h1>
            </Link>
            <Image
                className="image-stars"
                src='/stars.png'
                alt='Stars'
                width={120}
                height={20} />
            <h1 className="top-left-center-text">
                Наши номера
            </h1>
            <h1 className="top-left-center-two-text">
                Отель расположен на двух этажах, без лифта. На первом этаже, помимо стойки регистрации, есть <br />уютная гостиная, где можно посидеть и выпить чай.
            </h1>
            <div>
                <div className="button-container">
                    <Link href="/gallery" passHref>
                        <button className='button'>Галерея</button>
                    </Link>
                    <Link href="/breakfast" passHref>
                        <button className='button'>Завтраки</button>
                    </Link>
                    <Link href="/contacts" passHref>
                        <button className='button'>Контакты</button>
                    </Link>
                    {isAuthenticated ? ( //проверка на авторизацию
                        <Link href="/account" passHref>
                            <button className='button'>Аккаунт</button>
                        </Link>
                    ) : (
                        <Link href="/auth" passHref>
                            <button className='button'>Войти</button>
                        </Link>
                    )}
                    <Link href="/cacoito-instagram" passHref>
                        <Image src="/go-to-instagram.png" alt="Home" width={64} height={64} className="insta-icon" />
                    </Link>
                    <Link href="https://t.me/AlexandriaHotelBot" passHref>
                        <Image src="/go-to-telegram.png" alt="Home" width={64} height={64} className="insta-icon" />
                    </Link>
                </div>

            </div>
        </div>
    );
};
