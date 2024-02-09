import {
    TiMinusOutline,
    TiPlusOutline,
    TiStopwatch,
    TiThMenuOutline,
    TiTickOutline,
    TiTimesOutline
} from "react-icons/ti";
import {TbTerminal2} from "react-icons/tb";

function App() {

    return (
        <>
            <div className="w-full h-screen bg-blue-100">
                <div className="w-2/3 h-screen flex flex-col gap-10 justify-center mx-auto">
                    <div className="w-full text-center text-5xl pt-12 relative">
                        <div className="bg-gradient-to-r text-transparent bg-clip-text text-clip-content
                            from-blue-950 from-20% to-blue-600 to-60%">
                            TERMINA LOG
                            <br/>
                            <code className="text-3xl"> Log-Recorder-Terminal </code>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex gap-1 mb-1 text-md font-semibold justify-end">
                            <div
                                className="flex gap-2 h-fit w-fit px-6 py-2  my-auto bg-blue-900 justify-center items-center rounded-2xl text-white">
                                <span><TiPlusOutline size={20}/></span>
                                <p> Dosya Ekle </p>
                            </div>
                            <div
                                className="flex gap-2 h-fit w-fit px-6 py-2 my-auto  bg-blue-900 justify-center items-center rounded-2xl text-white">
                                <span><TiTimesOutline size={21}/></span>
                                <p> Islemi Durdur </p>
                            </div>
                        </div>
                        <div
                            className="rounded-3xl bg-blue-900 h-20 mb-1 overflow-hidden flex justify-around text-lg font-semibold">
                            <div className="flex gap-2 justify-center items-center text-green-300">
                                <span> <TiTickOutline size={22}/></span>
                                <p> Tamamlanan Dosyalar :</p>
                                <p>_ _ _</p>
                            </div>
                            <div className="flex gap-2 justify-center items-center text-red-300">
                                <span> <TiMinusOutline size={22}/></span>
                                <p> Tamamlanamayan Dosyalar :</p>
                                <p>_ _ _</p>
                            </div>
                            <div className="flex gap-2 justify-center items-center text-blue-300">
                                <span><TiStopwatch size={21}/></span>
                                <p> Bekleyen Dosyalar :</p>
                                <p>_ _ _</p>
                            </div>
                            <div className="flex gap-2 justify-center items-center text-orange-300">
                                <span><TiThMenuOutline size={20}/></span>
                                <p> Tum Dosyalar :</p>
                                <p>_ _ _</p>
                            </div>

                        </div>
                        <div className=" rounded-3xl w-full bg-blue-900 h-[45vh] p-2 ">
                            <div className="w-full h-full bg-black/60 rounded-2xl text-blue-50 px-4 py-3">
                                <TbTerminal2 size={22} />
                                <div className="w-full h-[1px] bg-blue-50 my-2"/>
                                <code>
                                    Log Kayitlari gelecek
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
