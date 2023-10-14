import Image from 'next/image';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

function PageProdutos() {
  return (
    <div>
      <NavBar />
      <main >
      <div className="flex flex-row justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-full" style={{ width: '300px', height: '600px' }}>
                <Image
                  src="/images/IMG1.png"
                  alt="Produto 1"
                  width={500}
                  height={300}
                  className="rounded-lg"
                  />
                <hr style={{ color: '#4A314D' }} className="border-t-2 border-500 my-2" />
                <h3 style={{ color: '#4A314D' }} className="text-2xl font-semibold text-purple-500 text-center" >PLANNER G MARGARIDA</h3>
              <div className="mt-auto"> 
                <h2 style={{ color: '#a8ba9a' }} className="text-m font-semibold text-purple-500" >R$</h2>
                <p style={{ color: '#4A314D' }} className="text-3xl font-bold text-500 text-center">129,90</p>
              </div>
          </div>
          </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-full" style={{ width: '300px', height: '600px' }}>
                <Image
                  src="/images/IMG2.png"
                  alt="Produto 2"
                  width={500}
                  height={300}
                  className="rounded-lg"
                  />
                <hr style={{ color: '#4A314D' }} className="border-t-2 border-500 my-2" />
                <h3 style={{ color: '#4A314D' }} className="text-2xl font-semibold text-purple-500 text-center" >PLANNER THE BEST</h3>
              <div className="mt-auto"> 
                <h2 style={{ color: '#a8ba9a' }} className="text-m font-semibold text-purple-500" >R$</h2>
                <p style={{ color: '#4A314D' }} className="text-3xl font-bold text-500 text-center">129,90</p>
              </div>
          </div>
          </div>


          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-full" style={{ width: '300px', height: '600px' }}>
                <Image
                  src="/images/IMG3.png"
                  alt="Produto 3"
                  width={500}
                  height={300}
                  className="rounded-lg"
                  />
                <hr style={{ color: '#4A314D' }} className="border-t-2 border-500 my-2" />
                <h3 style={{ color: '#4A314D' }} className="text-2xl font-semibold text-purple-500 text-center" >PLANNER P MARGARIDA</h3>
              <div className="mt-auto"> 
                <h2 style={{ color: '#a8ba9a' }} className="text-m font-semibold text-purple-500" >R$</h2>
                <p style={{ color: '#4A314D' }} className="text-3xl font-bold text-500 text-center">89,90</p>
              </div>
          </div>
          </div>
      </div>

      <div className="flex flex-row justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-full" style={{ width: '300px', height: '600px' }}>
            <Image
              src="/images/IMG4.png"
              alt="Produto 4"
              width={500}
              height={300}
              className="rounded-lg"
              />
            <hr style={{ color: '#4A314D' }} className="border-t-2 border-500 my-2" />
            <h3 style={{ color: '#4A314D' }} className="text-2xl font-semibold text-purple-500 text-center" >KIT RAINBOW</h3>
          <div className="mt-auto"> 
            <h2 style={{ color: '#a8ba9a' }} className="text-m font-semibold text-purple-500" >R$</h2>
            <p style={{ color: '#4A314D' }} className="text-3xl font-bold text-500 text-center">149,90</p>
          </div>
         </div>
          </div>

              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-full" style={{ width: '300px', height: '600px' }}>
                <Image
                  src="/images/IMG5.png"
                  alt="Produto 5"
                  width={500}
                  height={300}
                  className="rounded-lg"
                  />
                <hr style={{ color: '#4A314D' }} className="border-t-2 border-500 my-2" />
                <h3 style={{ color: '#4A314D' }} className="text-2xl font-semibold text-purple-500 text-center" >KIT 3 CADERNOS PONTILHADOS</h3>
              <div className="mt-auto"> 
                <h2 style={{ color: '#a8ba9a' }} className="text-m font-semibold text-purple-500" >R$</h2>
                <p style={{ color: '#4A314D' }} className="text-3xl font-bold text-500 text-center">99,90</p>
              </div>
          </div>
          </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4 h-full" style={{ width: '300px', height: '600px' }}>
                <Image
                  src="/images/IMG6.png"
                  alt="Produto 6"
                  width={500}
                  height={300}
                  className="rounded-lg"
                  />
                <hr style={{ color: '#4A314D' }} className="border-t-2 border-500 my-2" />
                <h3 style={{ color: '#4A314D' }} className="text-2xl font-semibold text-purple-500 text-center" >PLANNER YOU ARE'RE GONNA GET THERE</h3>
          <div className="mt-auto"> 
                <h2 style={{ color: '#a8ba9a' }} className="text-m font-semibold text-purple-500" >R$</h2>
                <p style={{ color: '#4A314D' }} className="text-3xl font-bold text-500 text-center">129,90</p>
          </div>
          </div>
          </div>
      

      </div>

      </main>
      <Footer />
    </div>
  );
}

export default PageProdutos;
