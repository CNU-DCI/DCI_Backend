package dciproject.backend.subjectStatistics;

import dciproject.backend.entireSubjects.EntireSubject;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Entity
@Table
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SubjectStatistics {

    @Id
    private String subjectID; // 년도+과목코드+분반

    @Column
    private String deadline; // 마감시간

    @Column
    private Integer correctedNum; // 정정인원

    @Column
    private Double comp_rate; // 경쟁률
}
