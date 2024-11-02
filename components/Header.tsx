import newIcon from '../assets/logo2024.png';
import Image from 'next/image';

const customBorder = {
    borderBottom: '0.5px solid',
    borderImageSource: 'linear-gradient(90deg, rgba(244, 222, 200, 0) 0%, rgba(244, 222, 200, 0.5) 100%)',
    borderImageSlice: 1
}

const Header = () => {
    return (
        <>
            <div style={customBorder}>
                <div className='flex items-center justify-between py-5 max-w-[1280px] mx-auto'>
                    <a className='flex items-center gap-2' href='/'>
                        <Image src={newIcon} alt="Pienteger Logo" className='h-6 w-6' />
                        <h1 className='text-[#F0F7FF] text-2xl font-bold font-sans'>Pienteger</h1>
                    </a>
                    <div className='flex items-center gap-6'>
                        <nav className='flex justify-end text-sm gap-6 text-[#F0F7FF] font-medium'>
                            <a href="/#service">Services</a>
                            <a href="/#Contact">Contact</a>
                            <a href="/#aboutUs">About Us</a>
                        </nav>
                        <a href="#" className='border border-[#F0F7FF] py-3 px-8 rounded-[200px] text-[#F0F7FF] text-sm font-medium'>
                            Start Free
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;