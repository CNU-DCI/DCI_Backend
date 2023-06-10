package dciproject.backend.subjectStatistics;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
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
