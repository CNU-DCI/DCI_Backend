package dciproject.backend.subjectStatistics;


import lombok.*;

@Builder
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ResponseForSubjectPerClass {
    String subjectID;
    int corrected_num;
    int comp_level;
    double comp_rate;

    public static ResponseForSubjectPerClass entityToDto(SubjectStatistics givenSubject){
        return ResponseForSubjectPerClass.builder().subjectID(givenSubject.getSubjectID()).
                corrected_num(givenSubject.getCorrectedNum()).
                comp_rate(givenSubject.getComp_rate()).
                comp_level(givenSubject.getComp_level()).build();
    }
}
