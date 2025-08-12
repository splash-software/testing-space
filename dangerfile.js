import { danger, markdown } from "danger";

if (danger.github.pr.body.length < 5) {
	fail("This pull request needs a description.");
}

const updatedFiles = [
	...danger.git.modified_files,
	...danger.git.created_files,
	...danger.git.deleted_files,
];

const hasSrcChanges = updatedFiles.some((p) => p.endsWith("/src"));

if (hasSrcChanges) {
	console.log("Changes detected in the 'src' directory.");
}
