import './App.css'
import Footer from './Component/Footer'
import Headers from './Component/Headers'
import Navbar from './Component/Navbar'
import TodoList from './Component/TodoList'
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {

  return (
    <Provider store={store}>
    <>
    <div
            className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
            {/* <!-- navbar --> */}
            <Navbar/>

            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                {/* <!-- header --> */}
                <Headers/>

                {/* <!-- todo list --> */}
                
                <TodoList/>

                <hr className="mt-4" />

                {/* footer */}
                <Footer/>
            </div>
        </div>
    </>
    </Provider>
  )
}

export default App
