import { UserIcon,LockClosedIcon } from "@heroicons/react/24/solid";

const LoginPage = () =>{
    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"> {/* 로그인 컨테이너 */}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm"> {/*컨테이너 안 로고 반응형*/}
                <>img</>
            </div>
            {/*입력*/}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> {/*폼 컨테이너*/}
                <form action="#" method="POST" className="space-y-3"> 
                    {/*action= "#" (현재 페이지로 폼 제출), "/submit" (submit 경로로 제출), 외부 사이트나 API엔드포인트 전송*/}
                    {/*method="POST" (폼 데이터 전송 방식 : HTTP-body) -> 회원가입, 로그인 데이터 서버 저장 및 수정, "GET" (URL쿼리 문자열에 포함해 전송 : 검색같은 데이터 조회시 사용)*/}
                    {/*아이디*/}
                    <div className="relative">
                        {/*유저 아이콘*/}
                        <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"/>
                        {/*placeholder*/}
                        <span className="absolute left-10 top-2/3 transform -translate-y-1/2 h-5 w-5 text-xs text-gray-400 pointer-events-none"
                              style={{writingMode:"vertical-lr", textOrientation: "mixed"}}
                            > 
                            아이디
                        </span>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                        {/*placeholder*/}
                        <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                            @gmail.com
                        </span>
                    </div>
                    {/*비밀번호*/}
                    <div className="relative">
                        {/*자물쇠 아이콘*/}
                        <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"/>
                        {/*placeholder*/}
                        <span className="absolute left-10 top1/2 transform translate-y-1/2 h-5 w-5 text-xs text-gray-400 pointer-events-none"
                              style={{writingMode:"vertical-lr", textOrientation:"mixed"}}
                            >
                            비밀번호
                        </span>                    
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="password"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" 
                        />
                        {/*palceholder*/}
                        <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                            password
                        </span>
                    </div>
                </form>

                {/*제출*/}
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <button 
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-slate-400 px-3 py-1.5 text-sm/6 font-bold text-gray-900 shadow-sm hover:text-white focus:ring-2 focus-ring-inset focus-visible:outline-indigo-600 sm:text-sm/6" 
                        >
                        로그인
                    </button>
                </div>

                {/*회원가입+아이디,비밀번호 찾기*/}
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex items-center justify-between">
                        <a href="#" className="font-thin text-xs text-gray-600 hover:text-gray-900">
                            회원이 아니신가요?
                        </a>
                        <a href="#" className="font-thin text-xs text-gray-600 hover:text-gray-900">
                            아이디 | 비밀번호 찾기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;