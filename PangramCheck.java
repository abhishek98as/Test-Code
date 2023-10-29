public class PangramCheck {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = checkPangram(input);

        if (isPangram) {
            System.out.println("The input is  pangram.");
        } else {
            System.out.println("The input is not  pangram.");
        }
    }

    static boolean checkPangram(String input) {
        boolean[] alphabetPresent = new boolean[26];
        int count = 0;

        for (int i = 0; i < input.length(); i++) {
            char currentChar = Character.toLowerCase(input.charAt(i));
            if ('a' <= currentChar && currentChar <= 'z') {
                int index = currentChar - 'a';
                if (!alphabetPresent[index]) {
                    alphabetPresent[index] = true;
                    count++;
                }
            }
        }

        return count == 26;
    }
}
