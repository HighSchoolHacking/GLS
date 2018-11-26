package conditionals;

class Index {
    public static void main(String[] args) {
        if (true) {
            System.out.println("if true");
        }

        Boolean second = false;
        if (second) {
            System.out.println("wrong if variable");
        } else {
            System.out.println("if false else");
        }

        if (1 + 1 == 3) {
            System.out.println("wrong if operation");
        } else if (2 + 2 == 3) {
            System.out.println("wrong else if");
        } else {
            System.out.println("else if else");
        }
    }
}
