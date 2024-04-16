import { useState } from "react";
import { Box, Heading, Text, Flex, Stat, StatLabel, StatNumber, StatHelpText, Table, Thead, Tbody, Tr, Th, Td, Avatar, Badge } from "@chakra-ui/react";
import { FaFileAlt, FaClock, FaChartBar } from "react-icons/fa";

const Index = () => {
  const [reports] = useState([
    { id: 1, patient: "John Doe", exam: "MRI", status: "completed", duration: 25 },
    { id: 2, patient: "Jane Smith", exam: "CT Scan", status: "in progress", duration: 18 },
    { id: 3, patient: "Mike Johnson", exam: "X-Ray", status: "completed", duration: 12 },
    { id: 4, patient: "Emily Davis", exam: "Ultrasound", status: "completed", duration: 30 },
  ]);

  const avgDuration = reports.reduce((sum, report) => sum + report.duration, 0) / reports.length;
  const mostCommonExam = "MRI"; // Placeholder, calculate based on report data

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Radiology Reports Dashboard
      </Heading>

      <Flex justifyContent="space-between" mb={8}>
        <Stat>
          <StatLabel>
            <FaFileAlt /> Total Reports
          </StatLabel>
          <StatNumber>{reports.length}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>
            <FaClock /> Avg. Report Duration
          </StatLabel>
          <StatNumber>{avgDuration.toFixed(1)} min</StatNumber>
          <StatHelpText>Tempo médio por laudo</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>
            <FaChartBar /> Most Common Exam
          </StatLabel>
          <StatNumber>{mostCommonExam}</StatNumber>
          <StatHelpText>Exame mais laudado</StatHelpText>
        </Stat>
      </Flex>

      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Patient</Th>
              <Th>Exam</Th>
              <Th>Status</Th>
              <Th>Duration (min)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reports.map((report) => (
              <Tr key={report.id}>
                <Td>
                  <Flex align="center">
                    <Avatar name={report.patient} mr={2} />
                    <Text>{report.patient}</Text>
                  </Flex>
                </Td>
                <Td>{report.exam}</Td>
                <Td>
                  <Badge colorScheme={report.status === "completed" ? "green" : "orange"}>{report.status}</Badge>
                </Td>
                <Td>{report.duration}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Index;
