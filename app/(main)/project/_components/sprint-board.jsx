"use client";

import { useState } from "react";
import SprintManager from "./sprint-manager";

export default function SprintBoard({ sprints, projectId, orgId }) {
  console.log(sprints);
  const [currentSprint, setCurrentSprint] = useState(
    sprints.find((sprint) => sprint.status === "ACTIVE") || sprints[0]
  );
  return (
    <div>
      <SprintManager
        sprint={currentSprint}
        setSprint={setCurrentSprint}
        sprints={sprints}
        projectId={projectId}
      />
    </div>
  );
}
