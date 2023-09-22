import bg1 from '../assets/images/bg1.png'
import bg2 from '../assets/images/bg2.png'

const BreadCrumb = ({path}) => {
    return (
        <div className='max-w-[1920px] mx-auto h-[250px] w-full bg-blue-100 flex justify-center items-center relative overflow-hidden'>
            <p className='text-4xl font-bold'>{path}</p>
            <div className='absolute -left-32 -bottom-10'>
                <img className='w-full' src={bg1} alt="" />
            </div>
            <div className='absolute -right-32 -top-10'>
                <img className='w-full' src={bg2} alt="" />
            </div>
        </div>
    );
};

export default BreadCrumb;