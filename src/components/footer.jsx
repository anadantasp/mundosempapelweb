import Image from 'next/image';

export default function Footer() {
    return (
        <nav className="bg-green h-189 w-1440 py-4 text-white   justify-between" style={{ color : '#4A314D'}}>
            <div>
                <div style={{ display: 'flex', flexDirection: 'column',}}>
                    <div style={{ display: 'flex', alignItems: 'center',  margin:5}}>
                        <span className='mb-4'>Meios de pagamento </span>

                        <Image 
                        src="/images/visa.jpeg"
                        width={35}
                        height={25}
                        alt="Logo Visa"
                        style={{ marginRight: '10px' }}
                        />
                        <Image 
                        src="/images/master.jpeg"
                        width={35}
                        height={25}
                        alt="Logo Master"
                        />
                        
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column',}}>

                        <div style={{ display: 'flex', alignItems: 'center',  margin:5}}>
                        <span className='mb-4'>Meios de envio </span>

                        <Image 
                        src="/images/correios.png"
                        width={50}
                        height={30}
                        alt="correio"
                        style={{ marginRight: '10px' }}
                        />
                        <Image 
                        src="/images/sedex.png"
                        width={35}
                        height={25}
                        alt="sedex"
                        />
                        
                        </div>
                    </div>

        

                <div style={{ display: 'flex', justifyContent: 'flex-end' , alignItems: 'center',}}>
                    <Image
                    src="/images/email.png"
                    width={25}
                    height={15}
                    alt="email"
                      />
                <span style={{ marginLeft: '10px' , marginRight: '10px'}}>adm@mundosempapel.com.br</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Image
                    src="/images/local.png"
                    width={25}
                    height={15}
                    alt="local"
                      />
                <span style={{ marginLeft: '10px' , marginRight: '10px'}}>Avenida Paulista 123 apt 321 - Bela Vista - São Paulo</span>
                </div>

               
                </div>
            </div>
            <div className="mt-auto"> 

                <h2 style={{ color: '#4A314D' }} className="text-s2 font-semibold " >Copyright papelaria -2646338197374 - 2023. Todos os diretos reservados</h2>
               
            </div>
        </nav>
    )
}