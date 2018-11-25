package whileloops;

class Main {
    public static void main(String[] args) {
        while (true) {
            System.out.println("Near-infinite");
            break;
        }

        Integer count = 0;

        while (count < 5) {
            count += 1;

            if (count % 2 == 0) {
                continue;
            }

            System.out.println(String.format("count is %0$d", count));
        }
    }
}
