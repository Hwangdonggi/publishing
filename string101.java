package Basic;

public class string101 {
    public static void main(String[] args) {
        // 기본: int,bool,double,float,char <> 참조: String
        String sugyeng = "설렁탕"; // pool
        String okhwa = "설렁탕"; //pool
        String seongkyu = new String("설렁탕");// 새로운 메모리로
        System.out.println(sugyeng == okhwa);
        System.out.println(sugyeng == seongkyu);
        System.out.println(sugyeng.equals(seongkyu));


    }
}
