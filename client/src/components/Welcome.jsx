import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const GridCell = ({ className, title }) => {
    return (
        <div className={ `${commonStyles} ${className}` }>
            { title }
        </div>
    )
}

const FormInput = ({ placeholder, name, type, value, handleChange }) => {
    return (
        <input 
            placeholder={ placeholder }
            type={ type }
            step="0.0001" // arrow on right side to increment by 0.0001
            value={ value }
            onChange={ (e) => handleChange(e, name) } // e = event
            className='my-2 w-full rounded-small p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
        />
    )
}

const Welcome = () => {
    const handleSubmit = () => {

    }

    const connectWallet = () => {

    }

    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col mf:mr-10'>
                    <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
                        Send Crypto <br /> across the world
                    </h1>
                    <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
                        Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
                    </p>
                    <button 
                        type="button"
                        onClick={ connectWallet }
                        className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
                    >
                        <p className='text-white text-base font-semibold'>Connect Wallet</p>
                    </button>

                    <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                        <GridCell title="Reliability" className="rounded-tl-2xl" />
                        <GridCell title="Security" />
                        <GridCell title="Ethereum" className="rounded-tr-2xl" />
                        <GridCell title="Web 3.0" className="rounded-bl-2xl"/>
                        <GridCell title="Low Fees" />
                        <GridCell title="Blockchain" className="rounded-br-2xl" />
                    </div>
                </div>

                { /* other side [half] of welcome section */ }
                <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'> 

                    { /* ETH card */ }
                    <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full mt-5 mb-10 eth-card white-glassmorphism'> 

                        { /* flex container */ }
                        <div className='flex justify-between flex-col w-full h-full'> 

                            { /* wraps top two icons */ }
                            <div className='flex justify-between items-start '> 

                                { /* left icon */ }
                                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'> 
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                { /* right icon */ }
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>

                            { /* wraps bottom text */ }
                            <div> 
                                <p className='text-white font-light text-sm'>
                                    Address
                                </p>
                                <p className='text-white font-semibold text-lg mt-1'>
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>

                    { /* form */ }
                    <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'> 
                        <FormInput placeholder="Address To" name="addressTo" type="text" handleChange={ () => {} } /> 
                        <FormInput placeholder="Amount (ETH)" name="amount" type="number" handleChange={ () => {} } />
                        <FormInput placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={ () => {} } />
                        <FormInput placeholder="Enter Message" name="message" type="text" handleChange={ () => {} } />

                        { /* line */ }
                        <div className='h-[1px] w-full bg-gray-400 my-2' />

                        { /* if isLoading is true: */ }
                        { false ? (
                            <Loader />
                        ) : (
                            <button 
                                type="button"
                                onClick={ handleSubmit }
                                className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'
                            >
                                Send Now
                            </button>
                        )}
                    </div>
        
                </div>

            </div>
        </div>
    );
}

export default Welcome;