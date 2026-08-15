package com.phc.priorityranking.service;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import com.phc.priorityranking.model.Phc;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Service
public class CsvDataLoaderService {

    public List<Phc> loadFromClasspath(String resourceName)
            throws IOException, CsvValidationException {

        try (
            InputStream inputStream =
                    getClass()
                            .getClassLoader()
                            .getResourceAsStream(resourceName)
        ) {
            if (inputStream == null) {
                throw new IOException(
                        "CSV resource not found: " + resourceName
                );
            }

            return parse(
                    new InputStreamReader(
                            inputStream,
                            StandardCharsets.UTF_8
                    )
            );
        }
    }

    private List<Phc> parse(InputStreamReader reader)
            throws IOException, CsvValidationException {

        List<Phc> phcs = new ArrayList<>();

        try (CSVReader csvReader = new CSVReader(reader)) {

            // Skip the CSV header row
            csvReader.readNext();

            String[] row;

            while ((row = csvReader.readNext()) != null) {

                Phc phc = new Phc();

                phc.setId(row[0].trim());
                phc.setName(row[1].trim());

                phc.setBuildingCondition(
                        Integer.parseInt(row[2].trim())
                );

                phc.setElectricity(
                        Integer.parseInt(row[3].trim())
                );

                phc.setWaterSupply(
                        Integer.parseInt(row[4].trim())
                );

                phc.setEquipmentScore(
                        Integer.parseInt(row[5].trim())
                );

                phc.setDailyPatients(
                        Integer.parseInt(row[6].trim())
                );

                phc.setBedCapacity(
                        Integer.parseInt(row[7].trim())
                );

                phc.setDistanceToHospitalKm(
                        Double.parseDouble(row[8].trim())
                );

                phc.setDoctorsAvailable(
                        Integer.parseInt(row[9].trim())
                );

                phc.setDoctorsRequired(
                        Integer.parseInt(row[10].trim())
                );

                phc.setNursesAvailable(
                        Integer.parseInt(row[11].trim())
                );

                phc.setNursesRequired(
                        Integer.parseInt(row[12].trim())
                );

                phcs.add(phc);
            }
        }

        return phcs;
    }
}