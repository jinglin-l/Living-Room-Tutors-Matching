import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TutorSubjects with the name for the new component.
function TutorSubjects(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Tutor Terms');

  // ******** GRADE CHECK BOXES **************
  const [PreK, setPreK] = useState( false );
  const [FirstGrade, setFirstGrade] = useState( false );
  const [SecondGrade, setSecondGrade] = useState( false );
  const [ThirdGrade, setThirdGrade] = useState( false );
  const [FourthGrade, setFourthGrade] = useState( false );
  const [FithGrade, setFithGrade] = useState( false );
  const [SixthGrade, setSixthGrade] = useState( false );
  const [SeventhGrade, setSeventhGrade] = useState( false );
  const [EigthGrade, setEigthGrade] = useState( false );
  const [NinthGrade, setNinthGrade] = useState( false );
  const [TenthGrade, setTenthGrade] = useState( false );
  const [EleventhGrade, setEleventhGrade] = useState( false );
  const [TwelthGrade, setTwelthGrade] = useState( false );
  // ******** GRADE CHECK BOXES **************
 
  // ******** SUBJECT CHECK BOXES **************
  const [K5Math, changeK5Math] = useState( false );
  const [K5Reading, setK5Reading] = useState( false );
  const [K5EnglishWriting, setK5EnglishWriting] = useState( false );
  const [K5SocialStudies, setK5SocialStudies] = useState( false );
  const [SixToEightLanguageArts, setSixToEightLanguageArts] = useState( false );
  const [SixToEightScience, setSixToEightScience] = useState( false );
  const [SixToEigthSocialStudies, setSixToEigthSocialStudies] = useState( false );
  const [MathPreAlgebra, setMathPreAlgebra] = useState( false );
  const [MathLinearAlgebra, setMathLinearAlgebra] = useState( false );
  const [MathGeometry, setMathGeometry] = useState( false );
  const [MathAlgebraII, setMathAlgebraII] = useState( false );
  const [MathPrecalculusTrigonometry, setMathPrecalculusTrigonometry] = useState( false );
  const [BiologyLifeSciences, setBiologyLifeSciences] = useState( false );
  const [ScienceChemistry, setScienceChemistry] = useState( false );
  const [SciencePhysics, setSciencePhysics] = useState( false );
  const [ComputerScience, setComputerScience] = useState( false );
  const [LanguageChinese, setLanguageChinese] = useState( false );
  const [LanguageSpanish, setLanguageSpanish] = useState( false );
  const [LanguageFrench, setLanguageFrench] = useState( false );
  const [LanguageGerman, setLanguageGerman] = useState( false );

  const [WorldHistory, setWorldHistory] = useState( false );
  const [USHistory, setUSHistory] = useState( false );
  // ******** SUBJECT CHECK BOXES **************


  // *********** TUTOR GRADE LEVELS ****************
  const changePreK = () => {
    setPreK(!PreK);
    console.log('PreK', PreK)
  }

  const changeFirstGrade = () => {
    setFirstGrade(!FirstGrade);
    console.log('FirstGrade', FirstGrade)
  }

  const changeSecondGrade= () => {
    setSecondGrade(!SecondGrade);
    console.log('SecondGrade', SecondGrade)
  }

  const changeThirdGrade = () => {
    setThirdGrade(!ThirdGrade);
    console.log('ThirdGrade', ThirdGrade)
  }

  const changeFourthGrade= () => {
    setFourthGrade(!FourthGrade);
    console.log('FourthGrade', FourthGrade)
  }

  const changeFithGrade = () => {
    setFithGrade(!FithGrade);
    console.log('FithGrade', FithGrade)
  }

  const changeSixthGrade= () => {
    setSixthGrade(!SixthGrade);
    console.log('SixthGrade', SixthGrade)
  }

  const changeSeventhGrade = () => {
    setSeventhGrade(!SeventhGrade);
    console.log('SeventhGrade', SeventhGrade)
  }

  const changeEigthGrade= () => {
    setEigthGrade(!EigthGrade);
    console.log('EigthGrade', EigthGrade)
  }

  const changeNinthGrade = () => {
    setNinthGrade(!NinthGrade);
    console.log('NinthGrade', NinthGrade)
  }

  const changeTenthGrade= () => {
    setTenthGrade(!TenthGrade);
    console.log('TenthGrade', TenthGrade)
  }

  const changeEleventhGrade = () => {
    setEleventhGrade(!EleventhGrade);
    console.log('EleventhGrade', EleventhGrade)
  }

  const changeTwelthGrade= () => {
    setTwelthGrade(!TwelthGrade);
    console.log('TwelthGrade', TwelthGrade)
  }
// *********** TUTOR GRADE LEVELS *****************



// **************** TUTOR SUBJECTS *******************
const changeK5Math= () => {
  setK5Math(!K5Math);
  console.log('K5Math', K5Math)
}

const changeK5Reading= () => {
  setK5Reading(!K5Reading);
  console.log('K5Reading', K5Reading)
}

const changeK5EnglishWriting= () => {
  setK5EnglishWriting(!K5EnglishWriting);
  console.log('K5EnglishWriting', K5EnglishWriting)
}

const changeK5SocialStudies= () => {
  setK5SocialStudies(!K5SocialStudies);
  console.log('K5SocialStudies', K5SocialStudies)
}

const changeK5Science= () => {
  setK5Science(!K5Science);
  console.log('K5Science', K5Science)
}

const changeSixToEightLanguageArts= () => {
  setSixToEightLanguageArts(!SixToEightLanguageArts);
  console.log('SixToEightLanguageArts', SixToEightLanguageArts)
}

const changeSixToEightScience= () => {
  setSixToEightScience(!SixToEightScience);
  console.log('SixToEightScience', SixToEightScience)
}

const changeSixToEigthSocialStudies= () => {
  setSixToEigthSocialStudies(!SixToEigthSocialStudies);
  console.log('SixToEigthSocialStudies', SixToEigthSocialStudies)
}

const changeMathPreAlgebra= () => {
  setMathPreAlgebra(!MathPreAlgebra);
  console.log('MathPreAlgebra', MathPreAlgebra)
}

const changeMathLinearAlgebra= () => {
  setMathLinearAlgebra(!MathLinearAlgebra);
  console.log('MathLinearAlgebr', MathLinearAlgebra)
}

const changeMathAlgebraII= () => {
  setMathAlgebraII(!MathAlgebraII);
  console.log('MathAlgebraII', MathAlgebraII)
}

const changeMathGeometry= () => {
  setMathGeometry(!MathGeometry);
  console.log('MathGeometry', MathGeometry)
}

const changeMathPrecalculusTrigonometry= () => {
  setMathPrecalculusTrigonometry(!MathPrecalculusTrigonometry);
  console.log('MathPrecalculusTrigonometry', MathPrecalculusTrigonometry)
}

const changeBiologyLifeSciences= () => {
  setBiologyLifeSciences(!BiologyLifeSciences);
  console.log('BiologyLifeSciences', BiologyLifeSciences)
}

const changeScienceChemistry= () => {
  setScienceChemistry(!ScienceChemistry);
  console.log('ScienceChemistry', ScienceChemistry)
}

const changeSciencePhysics= () => {
  setSciencePhysics(!SciencePhysics);
  console.log('SciencePhysics', SciencePhysics)
}

const changeComputerScience= () => {
  setComputerScience(!ComputerScience);
  console.log('ComputerScience', ComputerScience)
}

const changeLanguageChinese= () => {
  setLanguageChinese(!LanguageChinese);
  console.log('LanguageChinese', LanguageChinese)
}

const changeLanguageSpanish= () => {
  setLanguageSpanish(!LanguageSpanish);
  console.log('LanguageSpanish', LanguageSpanish)
}

const changeLanguageFrench= () => {
  setLanguageFrench(!LanguageFrench);
  console.log('LanguageFrench', LanguageFrench)
}

const changeLanguageGerman= () => {
  setLanguageGerman(!LanguageGerman);
  console.log('LanguageGerman', LanguageGerman)
}

const changeWorldHistory= () => {
  setWorldHistory(!WorldHistory);
  console.log('WorldHistory', WorldHistory)
}

const changeUSHistory= () => {
  setUSHistory(!USHistory);
  console.log('USHistory', USHistory)
}
// **************** TUTOR SUBJECTS *******************


  return (
    <div>
      <h2>{heading}</h2>

      <h3>What grade levels are you comfortable tutoring/mentoring?</h3>
     {/* <p>{JSON.stringify(PreK)}</p> */}
        
        <div>
          <input type="checkbox" id="Pre-K/Kindergarten" name="Pre-K/Kindergarten" onChange={(event)=>changePreK()}/>
          <label for="Pre-K/Kindergarten">Pre-K/Kindergarten</label>
        </div>

        <div>
          <input type="checkbox" id="1st Grade" name="1st Grade" onChange={(event)=>changeFirstGrade()}/>
          <label for="1st Grade">1st Grade</label>
        </div>

        <div>
          <input type="checkbox" id="2nd Grade" name="2nd Grade" onChange={(event)=>changeSecondGrade()}/>
          <label for="2nd Grade">2nd Grade</label>
        </div>

        <div>
          <input type="checkbox" id="3rd Grade" name="3rd Grade" onChange={(event)=>changeThirdGrade()}/>
          <label for="3rd Grade">3rd Grade</label>
        </div>

        <div>
          <input type="checkbox" id="4th Grade" name="4th Grade" onChange={(event)=>changeFourthGrade()}/>
          <label for="4th Grade">4th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="5th Grade" name="5th Grade" onChange={(event)=>changeFithGrade()}/>
          <label for="5th Grade">5th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="6th Grade" name="6th Grade" onChange={(event)=>changeSixthGrade()}/>
          <label for="6th Grade">6th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="7th Grade" name="7th Grade" onChange={(event)=>changeSeventhGrade()}/>
          <label for="7th Grade">7th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="8th Grade" name="8th Grade" onChange={(event)=>changeEigthGrade()}/>
          <label for="8th Grade">8th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="9th Grade" name="9th Grade"onChange={(event)=>changeNinthGrade()}/>
          <label for="9th Grade">9th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="10th Grade" name="10th Grade" onChange={(event)=>changeTenthGrade()}/>
          <label for="10th Grade">10th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="11th Grade" name="11th Grade" onChange={(event)=>changeEleventhGrade()}/>
          <label for="11th Grade">11th Grade</label>
        </div>

        <div>
          <input type="checkbox" id="12th Grade" name="12th Grade" onChange={(event)=>changeTwelthGrade()}/>
          <label for="12th Grade">12th Grade</label>
        </div>


        <h3>What subjects are you comfortable tutoring?</h3>
        {/* NEED TO ADD THE ON CHANGE AND HOOKS FOR GRADE onChange={(event)=>changeTutorSujects(event)} */}

        <div>
          <input type="checkbox" id="K-5 Math" name="K-5 Math" onChange={(event)=>changeK5Math()}/>
          <label for="K-5 Math">K-5 Math</label>
        </div>

        <div>
          <input type="checkbox" id="K-5 Reading" name="K-5 Reading" onChange={(event)=>changeK5Reading()}/>
          <label for="K-5 Reading">K-5 Reading</label>
        </div>

        <div>
          <input type="checkbox" id="K-5 English/Writing" name="K-5 English/Writing" onChange={(event)=>changeK5EnglishWriting()}/>
          <label for="K-5 English/Writing">K-5 English/Writing</label>
        </div>

        <div>
          <input type="checkbox" id="K-5 Social Studies" name="K-5 Social Studies" onChange={(event)=>changeK5SocialStudies()}/>
          <label for="K-5 Social Studies">K-5 Social Studies</label>
        </div>

        <div>
          <input type="checkbox" id="K-5 Science" name="K-5 Science" onChange={(event)=>changeK5Science()}/>
          <label for="K-5 Science">K-5 Science</label>
        </div>
      
        <div>
          <input type="checkbox" id="6-8th Language Arts" name="6-8th Language Arts" onChange={(event)=>changeSixToEightLanguageArts()}/>
          <label for="6-8th Language Arts">6-8th Language Arts</label>
        </div>

        <div>
          <input type="checkbox" id="6-8th Science" name="6-8th Science" onChange={(event)=>changeSixToEightScience()}/>
          <label for="6-8th Science">6-8th Science</label>
        </div>

        <div>
          <input type="checkbox" id="6-8th Social Studies" name="6-8th Social Studies" onChange={(event)=>changeSixToEigthSocialStudies()}/>
          <label for="6-8th Social Studies">6-8th Social Studies</label>
        </div>
          
        <div>
          <input type="checkbox" id="Math: Pre-Algebra" name="K-5 Science" onChange={(event)=>changeMathPreAlgebra()}/>
          <label for="Math: Pre-Algebra">Math: Pre-Algebra</label>
        </div>
      
        <div>
          <input type="checkbox" id="Math: Algebra 1/Linear Algebra" name="Math: Algebra 1/Linear Algebra" onChange={(event)=>changeMathLinearAlgebra()}/>
          <label for="Math: Algebra 1/Linear Algebra">Math: Algebra 1/Linear Algebra</label>
        </div>

        <div>
          <input type="checkbox" id="Math: Algebra II" name="Math: Algebra II" onChange={(event)=>changeMathAlgebraII()}/>
          <label for="Math: Algebra II">Math: Algebra II</label>
        </div>

        <div>
          <input type="checkbox" id="Math: Geometry" name="Math: Geometry" onChange={(event)=>changeMathGeometry()}/>
          <label for="Math: Geometry">Math: Geometry</label>
        </div>
          
        <div>
          <input type="checkbox" id="Math: Precalculus/Trigonometry" name="Math: Precalculus/Trigonometry" onChange={(event)=>changeMathPrecalculusTrigonometry()}/>
          <label for="Math: Precalculus/Trigonometry">Math: Precalculus/Trigonometry</label>
        </div>

        <div>
          <input type="checkbox" id="Science: Biology/Life Sciences" name="Science: Biology/Life Sciences" onChange={(event)=>changeBiologyLifeSciences()}/>
          <label for="Science: Biology/Life Sciences">Science: Biology/Life Sciences</label>
        </div>

        <div>
          <input type="checkbox" id="Science: Chemistry" name="Science: Chemistry" onChange={(event)=>changeScienceChemistry()}/>
          <label for="Science: Chemistry">Science: Chemistry</label>
        </div>

        <div>
          <input type="checkbox" id="Science: Physics" name="Science: Physics" onChange={(event)=>changeSciencePhysics()}/>
          <label for="Science: Physics">Science: Physics</label>
        </div>

        <div>
          <input type="checkbox" id="Science: Computer Science" name="Science: Computer Science" onChange={(event)=>changeComputerScience()}/>
          <label for="Science: Computer Science">Science: Computer Science</label>
        </div>
        
        <div>
          <input type="checkbox" id="Language: Chinese" name="Language: Chinese" onChange={(event)=>changeLanguageChinese()}/>
          <label for="Language: Chinese">Language: Chinese</label>
        </div> 
        
        <div>
          <input type="checkbox" id="Language: Spanish" name="Language: Spanish" onChange={(event)=>changeLanguageSpanish()}/>
          <label for="Language: Spanish">Language: Spanish</label>
        </div> 
        
        <div>
          <input type="checkbox" id="Language: French" name="Language: French" onChange={(event)=>changeLanguageFrench()}/>
          <label for="Language: French">Language: French</label>
        </div> 
        
        <div>
          <input type="checkbox" id="Language: German" name="Language: German" onChange={(event)=>changeLanguageGerman()}/>
          <label for="Language: German">Language: German</label>
        </div>
      
        <div>
          <input type="checkbox" id="History: World History" name="History: World History" onChange={(event)=>changeWorldHistory()}/>
          <label for="History: World History">History: World History</label>
        </div>

        <div>
          <input type="checkbox" id="History: U.S. Historyn" name="History: U.S. History" onChange={(event)=>changeUSHistory()}/>
          <label for="History: U.S. History">History: U.S. History</label>
        </div>



          <option value="AP Honors Biology">AP Honors Biology</option>
          <option value="AP Honors Chemistry">AP Honors Chemistry</option>
          <option value="AP Honors Physics">AP Honors Physics</option>
          <option value="AP Honors Computer Science">AP Honors Computer Science</option>

          <option value="AP Honors Calculus AB">AP Honors Calculus AB</option>
          <option value="AP Honors Calculus BC">AP Honors Calculus BC</option>
          <option value="AP Honors Statistics">AP Honors Statistics</option>
          
          <option value="AP Honors English Literature and Composition">AP Honors English Literature and Composition</option>
          <option value="AP Honors English Language and Composition">AP Honors English Language and Composition</option>

          <option value="AP Honors Macroeconomics">AP Honors Macroeconomics</option>
          <option value="AP Honors Microeconomics">AP Honors Microeconomics</option>
          <option value="AP Honors Psychology">AP Honors Psychology</option>

          <option value="AP Honors United States History">AP Honors United States History</option>
          <option value="AP Honors Government and Politics">AP Honors Government and Politics</option>
          <option value="AP Honors Human Geography">AP Honors Human Geography</option>
          
          <option value="SAT Subject Tests">SAT Subject Tests</option>
          <option value="SAT Prep">SAT Prep</option>
          <option value="ACT Prep">ACT Prep</option>
          <option value="Other">Other</option>
        



    </div>
  ); 
}

export default TutorSubjects;
