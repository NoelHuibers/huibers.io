"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const TransformCard = (props: {
  title: string;
  content: string;
  rotate: number;
  github: string;
  website: string | null;
}) => {
  return (
    <motion.div
      className="transform cursor-pointer hover:z-50"
      style={{ rotate: props.rotate }}
      whileHover={{ rotate: 0, scale: 1.1 }}
    >
      <Card className="w-60">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.content}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="icon" asChild>
            <a href={props.github} target="_blank" rel="noreferrer">
              <FaGithub className="text-blueN" size="24" />
            </a>
          </Button>
          {props.website === null ? null : (
            <Button asChild>
              <a href={props.website} target="_blank" rel="noreferrer">
                Website
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TransformCard;
