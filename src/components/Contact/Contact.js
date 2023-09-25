import { useForm } from 'react-hook-form';
import './Contact.css';

function Contact() {

    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section id="contact">
            <h1>Contact us</h1>
            <div>
                <div className='image'></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input-box'>
                        <label>Name</label><br/>
                        <input type='text' name='name' {...register('name', {
                            required:'Name is required!'
                        })} />
                        <small>{errors.name?.message }</small>
                    </div>
        
                    <div className='input-box'>
                        <label>Email</label><br/>
                        <input type='text' name='email' {...register('email', {
                            required:'Email is required!',
                            pattern: {value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:'Invalid email format'}
                        })} />
                        <small>{errors.email?.message }</small>
                    </div>

                    <div className='input-box'>
                        <label>Message</label><br/>
                        <textarea name='message' {...register('message', {
                            required:'Message is required!'
                        })} />
                        <small>{errors.message?.message }</small>
                    </div>
                    <div className='input-box'>
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;