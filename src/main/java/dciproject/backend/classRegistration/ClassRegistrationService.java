package dciproject.backend.classRegistration;

import dciproject.backend.classRegistration.classRegistration_2020.ClassRegistrationPK_2020;
import dciproject.backend.classRegistration.classRegistration_2020.ClassRegistration_2020;
import dciproject.backend.classRegistration.classRegistration_2021.ClassRegistrationPK_2021;
import dciproject.backend.classRegistration.classRegistration_2021.ClassRegistration_2021;
import dciproject.backend.classRegistration.classRegistration_2022.ClassRegistrationPK_2022;
import dciproject.backend.classRegistration.classRegistration_2022.ClassRegistration_2022;
import dciproject.backend.entireSubjects.EntireSubject;
import dciproject.backend.entireSubjects.entireSubject_2020.EntireSubject_2020;
import dciproject.backend.entireSubjects.entireSubject_2021.EntireSubject_2021;
import dciproject.backend.entireSubjects.entireSubject_2022.EntireSubject_2022;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ClassRegistrationService {
    private final EntityManager entityManager;

    public ClassRegistrationService(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Transactional
    public ClassRegistration save(ClassRegistration registration){
        entityManager.persist(registration);

        return registration;
    }
    public ClassRegistration findById(int year, String id, String time){
        switch (year) {
            case 2020 -> {
                return entityManager.find(ClassRegistration_2020.class,
                        new ClassRegistrationPK_2020(id, time));
            }
            case 2021 -> {
                return entityManager.find(ClassRegistration_2021.class,
                        new ClassRegistrationPK_2021(id, time));
            }
            case 2022 -> {
                return entityManager.find(ClassRegistration_2022.class,
                        new ClassRegistrationPK_2022(id, time));
            }
        }
        return null;
    }

    @Transactional
    public void modifyRegistrationNumberById(int year,String id,String time,int number){
        ClassRegistration found=findById(year,id,time);
        found.setRegistrationNumber(number);

        ClassRegistration merged=entityManager.merge(found);

        entityManager.persist(merged);
    }

}
