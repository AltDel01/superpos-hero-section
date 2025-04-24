
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: 'Investment',
      superpos: 'Start with Rp. 19.000/Month',
      custom: 'Start with Rp. 50.000.000',
      other: 'Start with Rp. 199.000/Month',
    },
    {
      feature: 'Time To Build',
      superpos: 'With in a day',
      custom: 'More than 10-12 Weeks',
      other: 'More than 3-4 Weeks',
    },
    {
      feature: 'Features',
      superpos: 'All Essential Features Included',
      custom: 'Not All Features Covered',
      other: 'Not All Features Covered',
    },
    {
      feature: 'Scalability',
      superpos: 'Used by more 300+ Companies Globally',
      custom: 'Improve System Time to Time',
      other: 'Improve System Time to Time',
    },
    {
      feature: 'Tech Team',
      superpos: 'Included',
      custom: 'You need to hire',
      other: 'You need to hire',
    },
    {
      feature: 'Support Cost',
      superpos: 'Included',
      custom: 'You need to Pay Extra',
      other: 'You need to Pay Extra',
    },
    {
      feature: 'Maintenance Cost',
      superpos: 'Included',
      custom: 'Start with Rp. 2.000.000/Month',
      other: 'Start with Rp. 100.000/Month',
    },
    {
      feature: 'Server Cost',
      superpos: 'Included',
      custom: 'Start with Rp. 500.000/Month',
      other: 'Start with Rp. 200.000/Month',
    },
    {
      feature: 'Reliability',
      superpos: 'Higher',
      custom: 'Lower',
      other: 'Lower',
    },
    {
      feature: 'Apple Approval',
      superpos: 'Guaranteed',
      custom: 'Guaranteed',
      other: 'Not Guaranteed',
    },
    {
      feature: 'Google Approval',
      superpos: 'Guaranteed',
      custom: 'Guaranteed',
      other: 'Not Guaranteed',
    },
  ];

  return (
    <section className="py-16 bg-[#f4efe9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Why You Should Start with <span className="italic">SuperPOS</span> Instead of Making Custom Apps?
          </h2>
        </div>

        <div className="overflow-x-auto">
          <Table className="w-full bg-white rounded-lg">
            <TableHeader className="bg-[#FDE1D3]">
              <TableRow>
                <TableHead className="w-[200px]"></TableHead>
                <TableHead className="text-center font-bold italic">SuperPOS</TableHead>
                <TableHead className="text-center font-bold">Custom</TableHead>
                <TableHead className="text-center font-bold">Other POS System</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisons.map((item) => (
                <TableRow key={item.feature}>
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell className="text-center">{item.superpos}</TableCell>
                  <TableCell className="text-center">{item.custom}</TableCell>
                  <TableCell className="text-center">{item.other}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
