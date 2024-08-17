package Basic;

public class DataType {
    public static void main(String[] args) {
        //프로그래밍 언어: 컴파일 언어(java,c,c++,ts,...) vs 인터프리터 언어(js,py)
        //              데이터 타입 변수명 = 값            const 변수명 = 값

        // RAM[4btye 쓸게]
        // 4byte -> 32bit

        // 1bit[전구하나]: 2^1
        // 2bit[전구두개]: 2^2
        // 32bit[전구 32개]: 2^32(+-0~2^31) + 1[부호비트]
        // int -2^31 ~ 2^31
        int  num = 1; // 숫자 - 정수(integer) 4byte
        double pi = 3.14; //실수(double[8byte], float[4byte])
        boolean is12 = true; // 불리언[1byte(8bit)]
        char initial = 'K'; //문자[2byte(16bit) 2^16]

        // 참조 데이터 타입
        // 쌀국수 타입 참조 [heap(동적) 메모리]
        String lunch = "쌀국수";

        System.out.println(lunch);
        System.out.println(num);
        System.out.println(pi);
        System.out.println(is12);
        System.out.println(initial);



    }
}
