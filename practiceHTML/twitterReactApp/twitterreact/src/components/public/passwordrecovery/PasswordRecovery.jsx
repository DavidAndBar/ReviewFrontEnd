import { Link } from "react-router-dom";

const PasswordRecovery = () =>{

    return <> 
            <main className="main">
                <section className="container">
                    <p>
                        <Link to="/">
                            <svg width="67" height="54" viewBox="0 0 67 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M66.2258 6.37292C63.7904 7.45208 61.1742 8.18125 58.4237 8.51083C61.2296 6.83083 63.3821 4.165 64.3971 0.991666C61.7721 2.54917 58.8642 3.68083 55.7696 4.2875C53.2904 1.65083 49.7612 0 45.8529 0C38.3512 0 32.2671 6.08417 32.2671 13.5917C32.2671 14.6533 32.3896 15.6858 32.6171 16.6833C21.3208 16.1146 11.3137 10.7042 4.61125 2.485C3.44458 4.4975 2.77375 6.83083 2.77375 9.31583C2.77375 14.0292 5.17417 18.1912 8.81708 20.6267C6.58875 20.5538 4.49458 19.9442 2.66292 18.9263V19.1012C2.66292 25.6842 7.34417 31.1763 13.5625 32.4246C12.4192 32.7337 11.2204 32.8971 9.98375 32.8971C9.10875 32.8971 8.25417 32.8154 7.42583 32.6579C9.15542 38.0537 14.1721 41.9854 20.1192 42.0904C15.4671 45.7362 9.6075 47.9092 3.24333 47.9092C2.14667 47.9092 1.06458 47.845 0 47.7196C6.01417 51.5783 13.1542 53.8242 20.825 53.8242C45.8208 53.8242 59.4854 33.1217 59.4854 15.1667C59.4854 14.5833 59.4708 13.9942 59.4446 13.4108C62.0987 11.4917 64.4029 9.10292 66.22 6.38167L66.2258 6.37292Z" fill="#1DA1F2"/>
                            </svg>
                        </Link></p>
                    <p className="subtitle">My Twitter</p>
                    <h1 className="title">Create your account</h1>
                    <form className="form">
                        <p className="paragraphForm2"><label className="label">Email or Username</label><input type="text" className="input"></input></p>
                        <p><button type="button" className="button">Recover your password</button></p>
                    </form>
                    <p>Return to <Link to="/">Login</Link></p>
                </section>
            </main>
    </>
}
;

export default PasswordRecovery;