# _Leap Year Verification_

#### _This webpage converts user input into pig latin._

#### By _Grady L Shelton & Jennifer Kinsey_

## Description

_Webpage is a good practice example of separating business logic and UI logic. It performs the leap year method separately than the UI if/else which displays to the user._

## Setup/Installation Requirements

* _Ensure internet connection_
* _Open Terminal_
* _Change into the desktop directory ('cd desktop')_
* _Run "git clone  https://github.com/gravytates/pig-latin.git"_
* _Open 'pig-latin' folder in desktop_
* _Open 'index.html' file_

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Please contact Grady L Shelton at gradyish@gmail.com if you have any questions or need any support._

## Technologies Used

_Webpage is built with HTML, CSS (specifically using a default bootstrap.css file/framework with minimal styling), javaScript, and the jQuery3.2.0 files/framework. Jennifer Kinsey and Grady L Shelton and Epicodus are not liable for anything beyond Rowdy Market's webpage. Rowdy's market is not real and is just a practice exercise._

### License

_Copyright (c) 2017 Grady L Shelton. This software is licensed under the MIT license._


## _BDE_



* _The program does nothing to non-alphabetical characters OF THE FIRST LETTER OF INPUT, since they do not contain consonants or vowels._
* _Example Input: 3_
* _Example Output: 3_
* _The program does nothing to non-alphabetical characters FOR THE WHOLE ARRAY, since they do not contain consonants or vowels._
* _Example Input: 3_
* _Example Output: 3_
* _The program adds "ay" to single-letter words beginning with a vowel._
* _Example Input: i_
* _Example Output: iay_
* _The program adds "ay" to multiple-letter words beginning with a vowel._
* _Example Input: island_
* _Example Output: islanday_
* _The program adds “ay” to multiple words with multiple-letters beginning with a vowel._
* _Example Input: apples outside, on an island_
* _Example Output: applesay outsideay, onay anay islanday_
* _The program adds “ay” to words with multiple-letters beginning with a vowel, regardless of case._
* _Example Input: Apples outside, on an Island_
* _Example Output: Applesay outsideay, onay anay Islanday_
 * _The program removes the leading consonant and places it at the end of the word, followed by “ay”_
* _Example Input: tear_
* _Example Output: eartay_
* _The program removes the leading consonant and places it at the end of multiple words, followed by “ay”_
* _Example Input: tear here_
* _Example Output: eartay erehay_
* _The program removes the leading consonants (up to 3) and places it at the end of the word, followed by “ay”_
* _Example Input: there or schedule_
* _Example Output: erethay || eduleschay_
* _The program removes the leading consonants (up to 3)  on multiple words and places it at the end of the word, followed by “ay”_
* _Example Input: there schedule_
* _Example Output: erethay eduleschay_
* _The program removes the leading “qu” and places it at the end of the word, followed by “ay”_
* _Example Input: queen_
* _Example Output: eenquay_
* _If “qu” is one of the leading consonants (x-qu or qu-x, where x is any letter), remove the leading characters through u, add it to the end of the word, and add “ay”_
* _Example Input: squelch _
* _Example Output: elchsquay_
* _The program receives words starting with a “Y” or “y” and treats it as a consonant._
* _Example Input: Yelp_
* _Example Output: Elpay_
