import Loading from '../Shared/Loading';

const Donors = () => {

    const image_token = import.meta.env.VITE_Image_Upload_Token;
    console.log(image_token);


    return (
        <div>
            <h3>This is donors page</h3>
            <Loading></Loading>
            
        </div>
    );
};

export default Donors;