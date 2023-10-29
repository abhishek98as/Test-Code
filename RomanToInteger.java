public class RomanToInteger {

    public static int romanToInteger(String roman) {
        int result = 0;

        for (int i = 0; i < roman.length(); i++) {
            int current = charToValue(roman.charAt(i));

            if (i + 1 < roman.length()) {
                int next = charToValue(roman.charAt(i + 1));

                if (current < next) {
                    result += (next - current);
                    i++;  
                } else {
                    result += current;
                }
            } else {
                result += current;
            }
        }

        return result;
    }

    public static int charToValue(char romanChar) {
        switch (romanChar) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                throw new IllegalArgumentException("Invalid Roman numeral character: " + romanChar);
        }
    }

    public static void main(String[] args) {
        String romanNumeral = "XII";
        int result = romanToInteger(romanNumeral);
        System.out.println("Roman numeral " + romanNumeral + " is equal to " + result);
    }
}
