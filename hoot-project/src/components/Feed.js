import '../styles/components/Feed.css'

function Feed() {

    return (
            <div className='main-feed change-cursor-pointer' >
                <article>
                    <div className='user-logo-column'>
                        <div className='user-logo'>
                            <a className='user-logo-link'>
                                <div className='logo-img round-border'>
                                    
                                </div>
                                {/* <img className='logo-img round-border' alt='' src='images/a1P9FSnS_200x200'></img> */}
                            </a>
                        </div>
                    </div>
                    <div className='message-block'>
                        <div className='message-header-container'>
                            <div className='message-header'>
                                <a className='user-name-link font-medium'>
                                    <div className='user-nickname text-overflow'>
                                        <span className='user-nickname-value text-wrap font-bold'>Daniel Barros</span>
                                    </div>
                                    <div className='user-address text-secondary text-overflow'>
                                        <span className='user-address-value text-wrap'>@barrosdaniel</span>
                                    </div>
                                </a>
                                <div className='message-header-separator text-secondary'>
                                    <span>·</span>
                                </div>
                                <a className='message-date text-secondary'>
                                    <time dateTime="2021-02-23T02:22:13.000Z">Feb 22</time>
                                </a>
                            </div>
                            <div className='trespoints'>···</div>
                        </div>
                        <div className='message-body'>
                            <div className='message-body-text'>
                                <span className='change-cursor-pointer'>
                                    Em meu livro contei que o Brasil desvinculou gastos de educação 2 vezes no séc XX, ambas em ditaduras: no Estado Novo e no regime militar. Adivinha o que aconteceu? O gasto com as escolas caiu e períodos de poucos avanços se seguiram. Vamos cometer o mesmo erro? Segue trecho: 1/5
                                </span>
                            </div>
                            <div className='message-icons'>
                                <div className='message-icon-container'>
                                    <div className='icon-1 comment'>
                                        <div className='icon-background round-border'></div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
                                        </svg>
                                    </div>
                                    <div className='icon-value'>
                                        <span>2</span>
                                    </div>
                                </div>
                                <div className='message-icon-container'>
                                    <div className='icon-2 copy'>
                                        <div className='icon-background round-border'></div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 7H17V10L21 6L17 2V5H5V11H7V7ZM17 17H7V14L3 18L7 22V19H19V13H17V17Z"/>
                                        </svg>

                                    </div>
                                    <div className='icon-value'>
                                        <span>2</span>
                                    </div>
                                </div>
                                <div className='message-icon-container'>
                                    <div className='icon-3 favorite'>
                                        <div className='icon-background round-border'></div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"/>
                                        </svg>
                                    </div>
                                    <div className='icon-value'>
                                        <span>2</span>
                                    </div>
                                </div>
                                <div className='message-icon-container'>
                                    <div className='icon-4 send'>
                                        <div className='icon-background round-border'></div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.53 7.47024L12.53 2.47024C12.237 2.17724 11.762 2.17724 11.47 2.47024L6.47001 7.47024C6.17601 7.76324 6.17601 8.23824 6.47001 8.53024C6.76401 8.82224 7.23701 8.82424 7.53001 8.53024L11.25 4.81024V15.0002C11.25 15.4142 11.586 15.7502 12 15.7502C12.414 15.7502 12.75 15.4142 12.75 15.0002V4.81024L16.47 8.53024C16.616 8.67724 16.808 8.75024 17 8.75024C17.192 8.75024 17.384 8.67824 17.53 8.53024C17.823 8.23724 17.823 7.76324 17.53 7.47024Z"/>
                                            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14C2 13.586 2.336 13.25 2.75 13.25C3.164 13.25 3.5 13.586 3.5 14V19.652C3.5 20.089 3.855 20.444 4.292 20.444H19.708C20.145 20.444 20.5 20.089 20.5 19.652V14C20.5 13.586 20.836 13.25 21.25 13.25C21.664 13.25 22 13.586 22 14V19.652C22 20.916 20.972 21.944 19.708 21.944Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
    )
}

export default Feed