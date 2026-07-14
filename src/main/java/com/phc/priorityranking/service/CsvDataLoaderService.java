package com.phc.priorityranking.service;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import com.phc.priorityranking.model.PHC;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

/**
 * Loads PHC records from a CSV file (classpath resource by default).
 * Expected CSV columns (in order):
 * phcId,name,district,buildingConditionScore,hasElectricity,hasWaterSupply,
 * equipmentAvailabilityScore,monthlyPatientCount,bedCapacity,
 * distanceToNearestHospitalKm,doctorsAvailable,doctorsRequired,
 * nursesAvailable,nursesRequired
 */
@Service
public class CsvDataLoaderService {

    public List<PHC> loadFromClasspath(String resourceName) throws IOException, CsvValidationException {
        try (InputStream is = getClass().getClassLoader().getResourceAsStream(resourceName)) {
            if (is == null) {
                throw new IOException("CSV resource not found: " + resourceName);
            }
            return parse(new InputStreamReader(is, StandardCharsets.UTF_8));
        }
    }

    private List<PHC> parse(InputStreamReader reader) throws IOException, CsvValidationException {
        List<PHC> phcs = new ArrayList<>();

        try (CSVReader csvReader = new CSVReader(reader)) {
            String[] header = csvReader.readNext(); // skip header row
            String[] row;

            while ((row = csvReader.readNext()) != null) {
                PHC phc = new PHC();
                phc.setPhcId(row[0]);
                phc.setName(row[1]);
                phc.setDistrict(row[2]);
                phc.setBuildingConditionScore(Integer.parseInt(row[3].trim()));
                phc.setHasElectricity(Boolean.parseBoolean(row[4].trim()));
                phc.setHasWaterSupply(Boolean.parseBoolean(row[5].trim()));
                phc.setEquipmentAvailabilityScore(Integer.parseInt(row[6].trim()));
                phc.setMonthlyPatientCount(Integer.parseInt(row[7].trim()));
                phc.setBedCapacity(Integer.parseInt(row[8].trim()));
                phc.setDistanceToNearestHospitalKm(Double.parseDouble(row[9].trim()));
                phc.setDoctorsAvailable(Integer.parseInt(row[10].trim()));
                phc.setDoctorsRequired(Integer.parseInt(row[11].trim()));
                phc.setNursesAvailable(Integer.parseInt(row[12].trim()));
                phc.setNursesRequired(Integer.parseInt(row[13].trim()));
                phcs.add(phc);
            }
        }

        return phcs;
    }
}
