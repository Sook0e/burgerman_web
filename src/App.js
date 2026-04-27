import React from 'react';
import sooki from './asset/sooki.png';
import Burgerman from './asset/burgerman.svg';
import burgerText from './asset/burger*3.svg'; 
import mini1 from './asset/mini_burgerman_1.svg';
import mini2 from './asset/mini_burgerman_2.svg';
import mini3 from './asset/mini_burgerman_3.svg';
import shadow from './asset/bm_shadow.svg';
import chat from './asset/chat.svg';


function App() {
  return (
    <div className="w-full min-h-screen bg-[#0200FF] flex justify-center items-center"> 
      
      <div className="w-full max-w-[450px] h-[100dvh] no-scrollbar overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#0200FF] relative">
        
        {/* SECTION 1: 메인 버거맨 */}
        <section className="h-full w-full flex flex-col items-center justify-center snap-start relative p-6">
          
            <img 
              src={sooki} 
              alt="sooki" 
              className="w-[240px] object-contain relative -bottom-10" 
            />
            <div className="absolute bottom-4 w-32 h-4 bg-black/15 rounded-[100%] blur-md"></div>
        

          <div className="mt-10 text-center px-4">
            
            <h2 className="text-white text-6xl font-black italic tracking-tighter uppercase leading-none">
              SoOki's 1st <span className="text-yellow-400">web</span> project
            </h2>
          </div>
        </section>

        {/* SECTION 2: BURGER*3 화면 */}
        <section className="h-full w-full flex items-center justify-center snap-start relative p-6">
          
          <div className="z-10 w-full">
            <img 
              src={burgerText} 
              alt="BURGER Text Block" 
              className="w-full h-auto object-contain px-4"
            />
          </div>

          {/*  미니 버거 위치 */}
          <img 
            src={mini3} 
            alt="mini_top" 
            className="absolute top-[8%] left-[20%] w-24 h-auto rotate-[-15deg]"
          />

          <img 
            src={mini3} 
            alt="mini_left" 
            className="absolute bottom-[+3%] left-[8%] w-32 h-auto rotate-[10deg]"
          />

          <img 
            src={mini2} 
            alt="mini_right" 
            className="absolute bottom-[20%] right-[7%] w-28 h-auto rotate-[-5deg]"
          />
        </section>

        {/* -------------------- SECTION 2: 메인 버거맨 -------------------- */}
        {/* justify-end를 써서 바닥으로 보내되, items-center로 가로 중앙을 유지합니다. */}
        <section className="h-full w-full flex flex-col items-center justify-end snap-start relative p-6 pb-28">
         
          <div className="relative flex flex-col items-center scale-110 mb-12">
            {/* 말풍선: 캐릭터 머리 우측 상단 고정 */}
            <img 
            src={chat} 
            alt="chat" 
            className="absolute -top-40 -right-24 w-48 h-auto animate-bounce z-50 origin-bottom" 
            style={{ 
              animationDuration: '5s', /* 애니메이션 속도 조금 더 빠르게 */
              
            }}
            />

            {/* 버거맨 본체 */}
            <img 
              src={Burgerman} 
              alt="Burger Man" 
              className="w-72 h-auto object-contain z-10" 
            />

            {/* 전용 그림자 */}
            <img 
              src={shadow} 
              alt="shadow" 
              className="absolute -bottom-4 w-48 h-auto object-contain z-0 opacity-80" 
            />
              </div>

            
          </section>

      </div> 
    </div> 
  );
}

export default App;