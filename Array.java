package Basic;

import java.util.Scanner;

public class Array {
    public static void main(String[] args) {
//       int[] scores = new int[5];
//       for(int i=0;i<5;i++){
//           scores[i] = 0;     }

        //유저에게 반 학생수를 물어보고
        //첫번째 학생부터 ~ n번째 학생의 수학점수를
        //모두 입력받고
        //첫번째 학생부터 ~ n번째 학생의 수학점수를 모두 보여주고
        //평균까지 나타내는 프로그램
        //ex) 5 ->
        // 1번째 학생: 30
        // 2번째 학생: 40 ...
        // ...
        // 1번째 학생 점수 : 30
        // ...
        // 반 평균: ~~

        Scanner sc = new Scanner(System.in);

//        System.out.print("n 반 학생수 입력 : ");
//
//        int students = sc.nextInt();
//        int[] mathScores = new int[students];
//
//        for(int i=0; i < mathScores.length;i++){
//            System.out.printf("%d  번째 학생 수학점수:",i+1);
//            mathScores[i] = sc.nextInt();
//        }
//
//        for (int i=0; i<mathScores.length;i++){
//            System.out.printf("%d 번째 학생 수학점수: %d \n",i+1,mathScores[i]);
//            sum = sum+i;
//        }
//
//        System.out.printf("반 평균: 2f\n",sum/mathScores.length);
//
//          int[][] test = new int[3][3];
        //반 학생 수를 입력 받고, 학생의 국어 점수, 수학 점수, 영어 점수
        //국어 평균, 수학 평균, 영어 평균을 나타내는 프로그램 만들기

        System.out.println("학생수 입력 : ");
        int students = sc.nextInt();
        int[][] scorces = new int[students][3];

        for (int i = 0; i < students; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.println(i + 1 + "번째의 학생:");
                switch (j) {
                    case 0:
                        System.out.println("국어 점수 입력:");
                        scorces[i][j] = sc.nextInt();
                        break;
                    case 1:
                        System.out.println("수학 점수 입력:");
                        scorces[i][j] = sc.nextInt();
                        break;

                    case 2:
                        System.out.println("영어 점수 입력:");
                        scorces[i][j] = sc.nextInt();
                        break;
                }
            }
            double korean = 0;
            double math = 0;
            double english = 0;
            double []avg = new double[3]; //초깃값 세팅 안됨
            double []avg1 = {0,0,0};

            for (i = 0; i < students; i++) {
                korean += scorces[i][0];
                math += scorces[i][1];
                english += scorces[i][2];

            }
            System.out.printf("국어 평균 : %.2f\n", korean / students);
            System.out.printf("수학 평균 : %.2f\n", math / students);
            System.out.printf("영어 평균 : %.2f\n", english / students);

            //나만의 타입 class
        }
    }

}