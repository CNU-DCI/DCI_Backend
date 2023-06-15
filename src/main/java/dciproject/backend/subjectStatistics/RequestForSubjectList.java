package dciproject.backend.subjectStatistics;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Data
public class RequestForSubjectList {
    List<String> list;
}
