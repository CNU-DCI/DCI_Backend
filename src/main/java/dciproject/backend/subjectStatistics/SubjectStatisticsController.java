package dciproject.backend.subjectStatistics;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SubjectStatisticsController {

    private final SubjectStatisticsService subjectStatisticsService;
    public SubjectStatisticsController(SubjectStatisticsService subjectStatisticsService) {
        this.subjectStatisticsService = subjectStatisticsService;
    }

    @PostMapping("/statistics/build")
    private void dataInput(){
        subjectStatisticsService.databaseBuild();
    }
}
