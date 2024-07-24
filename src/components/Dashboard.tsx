"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

type Stats = {
  date: string;
  total_daily_usage: number;
};

type MonthlyStats = {
  month: string;
  total_monthly_usage: number;
};

type YearlyStats = {
  year: string;
  total_yearly_usage: number;
};

const Dashboard = () => {
  const [dailyStats, setDailyStats] = useState<Stats[]>([]);
  const [monthlyStats, setMonthlyStats] = useState<MonthlyStats[]>([]);
  const [yearlyStats, setYearlyStats] = useState<YearlyStats[]>([]);

  useEffect(() => {
    const fetchDailyStats = async () => {
      try {
        const { data } = await axios.get('/api/usagestatistics/daily', {
          headers: {
            Authorization: `Bearer YOUR_TOKEN_HERE`,
          },
        });
        setDailyStats(data);
      } catch (error) {
        console.error("Error fetching daily stats:", error);
      }
    };

    const fetchMonthlyStats = async () => {
      try {
        const { data } = await axios.get('/api/usagestatistics/monthly', {
          headers: {
            Authorization: `Bearer YOUR_TOKEN_HERE`,
          },
        });
        setMonthlyStats(data);
      } catch (error) {
        console.error("Error fetching monthly stats:", error);
      }
    };

    const fetchYearlyStats = async () => {
      try {
        const { data } = await axios.get('/api/usagestatistics/yearly', {
          headers: {
            Authorization: `Bearer YOUR_TOKEN_HERE`,
          },
        });
        setYearlyStats(data);
      } catch (error) {
        console.error("Error fetching yearly stats:", error);
      }
    };

    fetchDailyStats();
    fetchMonthlyStats();
    fetchYearlyStats();
  }, []);

  return (
    <div>
      <h1 className="mb-4">Dashboard</h1>
      <div className="mb-8">
        <h2 className="mb-2">Daily Usage Statistics</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Usage</th>
            </tr>
          </thead>
          <tbody>
            {dailyStats.map((stat) => (
              <tr key={stat.date}>
                <td>{stat.date}</td>
                <td>{stat.total_daily_usage}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="mb-8">
        <h2 className="mb-2">Monthly Usage Statistics</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Month</th>
              <th>Total Usage</th>
            </tr>
          </thead>
          <tbody>
            {monthlyStats.map((stat) => (
              <tr key={stat.month}>
                <td>{stat.month}</td>
                <td>{stat.total_monthly_usage}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <h2 className="mb-2">Yearly Usage Statistics</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Usage</th>
            </tr>
          </thead>
          <tbody>
            {yearlyStats.map((stat) => (
              <tr key={stat.year}>
                <td>{stat.year}</td>
                <td>{stat.total_yearly_usage}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
