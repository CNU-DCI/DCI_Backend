package dciproject.backend.subjectStatistics;


import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;


import java.util.ArrayList;
import java.util.List;

@RestController
@Slf4j
public class SubjectStatisticsController {

    private final SubjectStatisticsService subjectStatisticsService;
    public SubjectStatisticsController(SubjectStatisticsService subjectStatisticsService) {
        this.subjectStatisticsService = subjectStatisticsService;
    }

    @PostMapping("/api/statistics/build30219$#L4J38123")
    private void dataInput(){
        subjectStatisticsService.databaseBuild();
    }


    @GetMapping("/api/statistics/rank")
    private List<ResponseForSubjectPerClass> readByRank(@RequestParam int rank, @RequestParam int sortingOrder){
        return subjectStatisticsService.getRankedList(rank,sortingOrder);
    }

    @PostMapping("/api/statistics/readAll")
    private List<SubjectStatistics> readAll(@RequestBody List<String> list){
        List<SubjectStatistics> result=new ArrayList<>();
        for(String subjectID : list){
            result.add(subjectStatisticsService.findBySubjectID(subjectID));
        }
        return result;
    }

    @GetMapping("/api/statistics/read") // 하나의 과목 통계정보(ID, 경쟁률, 정정인원) 가져오기
    private SubjectStatistics read(@RequestParam String subjectID){
        return subjectStatisticsService.findBySubjectID(subjectID);
    }

    @GetMapping("/api/statistics/readAll-class") // 분반 별 통계정보 가져오기
    private List<SubjectStatistics> readAllByClass(@RequestParam String subjectID, @RequestParam String opener){
        String nextClass="00";
        String targetSubject=subjectID.substring(0, subjectID.length()-2);
        String nextSubjectID= targetSubject+nextClass;

        int classNum=0; // 시작분반 00~

        List<SubjectStatistics> result=new ArrayList<>();

        while(classNum<25) {
            if (subjectStatisticsService.isEqualOpener(nextSubjectID, opener)) {
                result.add(subjectStatisticsService.findBySubjectID(nextSubjectID));
            }
            nextClass=String.format("%02d",++classNum);
            nextSubjectID=targetSubject+nextClass;
        }

        log.info("statistics list RESULT={}",result);

        return result;
    }
}
